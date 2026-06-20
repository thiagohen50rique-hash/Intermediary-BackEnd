import multer from 'multer';
import path from 'path';

const saveDisk = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.resolve('uploads'));
    },

    filename: function (req, file, callback) {
        const id = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + file.originalname;
        callback(null, id);
    }
})

// Criando a trava de segurança 
const validFormat = function (req, file, callback) {
    const allowedFormat = [
        'image/jpeg',
        'image/jpg',
        'image/png'
    ];

    if (allowedFormat.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(new Error('Formato de arquivo inválido. Envie apenas imagens JPG ou JPG'))
    }
};

export const upload = multer({
    storage: saveDisk,
    fileFilter: validFormat
});