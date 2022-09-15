import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';

import Mongoose from 'mongoose';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId } from '../../mocks/lensMocks';
import Errors from '../../errors';

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId);
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves([lensMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a lens', () => {
    it('successfully created', async () => {
      const newLens = await lensModel.create(lensMock);

      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  });

  describe('Searching for a lens', () => {
  
    it('Successfully found', async() => {
      const stub = sinon.stub(Mongoose, 'isValidObjectId').resolves(true);
      const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(lensFound).to.be.deep.equal(lensMockWithId);
      stub.restore();
    });

    it('_id is not valid', async () => {
      const stub = sinon.stub(Mongoose, 'isValidObjectId').returns(false);
			let err: any;
			try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				err = error;
			}
			expect(err.message).to.be.eq(Errors.InvalidMongoId);
      stub.restore();
		});
			
  });

  describe('updating a lens', () => {

		beforeEach(() => {
			sinon.restore();
		})

			it('Successfully updated', async () => {
				sinon.stub(Mongoose, 'isValidObjectId').returns(true);
				sinon.stub(Model, 'findByIdAndUpdate').resolves(lensMockWithId);
        sinon.stub(Model, 'find').resolves([lensMockWithId]);

				const updated = await lensModel.update('any-id', { degree: 10, blueLightFilter: true, antiGlare: false});

				expect(updated).to.be.deep.equal(lensMockWithId);
			});

			it('Invalid id', async () => {
				sinon.stub(Mongoose, 'isValidObjectId').returns(false);
				sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

				let err: any;
				try {
					await lensModel.update('any-id', { degree: 10, blueLightFilter: true, antiGlare: false});
					
				} catch (error) {
					err = error;
				}

				expect(err.message).to.be.equal(Errors.InvalidMongoId);
			});

			it('Not found id', async () => {
				sinon.stub(Mongoose, 'isValidObjectId').returns(true);
				sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

				const updated = await lensModel.update('any-id', { degree: 10, blueLightFilter: true, antiGlare: false});

				expect(updated).to.be.deep.equal(null);
			});
	});

  describe('searching all lens', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.readAll();
      expect(lensFound).to.be.an('array');
    });
  });

  describe('deleting a lens', () => {
    it('successful deletion', async () => {
      const lensDeleted = await lensModel.destroy('62cf1fc6498565d94eba52cd');
      expect(lensDeleted).to.be.deep.equal(lensMockWithId);
    });
  
    it('_id not found', async () => {
      try {
        await lensModel.destroy('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
  
  
})
