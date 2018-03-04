const uploadModel = require('../models/uploadModel.js');

/**
 * uploadsController.js
 *
 * @description :: Server-side logic for managing uploadss.
 */
module.exports = {

    /**
     * uploadsController.list()
     */
    list:(req, res)=> {
        uploadModel.find((err, uploads) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting uploads.',
                    error: err
                });
            }
            return res.json(uploads);
        });
    },

    /**
     * uploadsController.show()
     */
    show: (req, res)=> {
        let id = req.params.id; uploadModel.findOne({_id: id}, (err, uploads) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting uploads.',
                    error: err
                });
            }
            if (!uploads) {
                return res.status(404).json({
                    message: 'No such uploads'
                });
            }
            return res.json(uploads);
        });
    },

    /**
     * uploadsController.create()
     */
    create: (req, res) => {
        let uploads = new uploadModel({branch_code : req.body.branch_code,
			image : req.body.image
			
        });

        uploads.save((err, uploads)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating uploads',
                    error: err
                });
            }
            return res.status(201).json(uploads);
        });
    },

    /**
     * uploadsController.update()
     */
    update: (req, res) => {
        let id = req.params.id; uploadModel.findOne({_id: id},  (err, uploads)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting uploads',
                    error: err
                });
            }
            if (!uploads) {
                return res.status(404).json({
                    message: 'No such uploads'
                });
            }

            uploads.image = req.body.image ? req.body.image : uploads.image;
			
            uploads.save((err, uploads)=> {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating uploads.',
                        error: err
                    });
                }

                return res.json(uploads);
            });
        });
    },

    /**
     * uploadsController.remove()
     */
    remove: (req, res)=> {
        let id = req.params.id; uploadModel.findByIdAndRemove(id, (err, uploads)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the uploads.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
