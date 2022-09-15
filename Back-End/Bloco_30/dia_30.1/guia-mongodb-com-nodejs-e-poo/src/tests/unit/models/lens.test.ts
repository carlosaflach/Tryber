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
    sinon.stub(lensModel, 'create').resolves(lensMockWithId);
    sinon.stub(lensModel, 'readOne').resolves(lensMockWithId);
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

  describe('Searching for a lens', async() => {
    // Não estou mockando a função isValidObjectId

    beforeEach(() => {
			sinon.restore();
		})

    it('Successfully found', async() => {
      const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });

    it('_id is not valid', async () => {
      sinon.stub(Mongoose, 'isValidObjectId').returns(false);
			let err: any;
			try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				err = error;
			}
			expect(err.message).to.be.eq(Errors.InvalidMongoId);
		});
			
  });

  describe('updating a frame', () => {

		beforeEach(() => {
			sinon.restore();
		})

			it('Successfully updated', async () => {
				sinon.stub(Mongoose, 'isValidObjectId').returns(true);
				sinon.stub(Model, 'findByIdAndUpdate').resolves(lensMockWithId);

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
	})
  
  
})
