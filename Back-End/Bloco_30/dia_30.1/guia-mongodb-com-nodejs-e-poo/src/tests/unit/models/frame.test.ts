// ./src/tests/unit/models/frame.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import Mongoose from 'mongoose';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';
import Errors from '../../errors';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(frameMockWithId);
		});

		it('_id is not valid', async () => {
			let err: any;
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				err = error;
			}
			expect(err.message).to.be.eq('InvalidMongoId');
		});
	});

	describe('updating a frame', () => {

		beforeEach(() => {
			sinon.restore();
		})

			it('Successfully updated', async () => {
				sinon.stub(Mongoose, 'isValidObjectId').returns(true);
				sinon.stub(Model, 'findByIdAndUpdate').resolves(frameMockWithId);

				const updated = await frameModel.update('any-id', { color: 'any-cor'});

				expect(updated).to.be.deep.equal(frameMockWithId);
			});

			it('Invalid id', async () => {
				sinon.stub(Mongoose, 'isValidObjectId').returns(false);
				sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

				let err: any;
				try {
					await frameModel.update('any-id', { color: 'any-cor'});
					
				} catch (error) {
					err = error;
				}

				expect(err.message).to.be.equal(Errors.InvalidMongoId);
			});

			it('Not found id', async () => {
				sinon.stub(Mongoose, 'isValidObjectId').returns(true);
				sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

				const updated = await frameModel.update('any-id', { color: 'any-cor'});

				expect(updated).to.be.deep.equal(null);
			});
	})
	

});