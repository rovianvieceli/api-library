const mongoose = require('mongoose');
const Book = mongoose.model('Book');

module.exports = {
    async index(request, result) {
        const { page = 1 } = request.query;
        const book = await Book.paginate({}, { page, limit: 10 });
        return result.json(book);
    },

    async show(request, result) {
        const book = await Book.findById(request.params.id);
        return result.json(book);
    },

    async store(request, result) {
        const book = await Book.create(request.body);
        return result.json(book);
    },

    async update(request, result) {
        const book = await Book.findByIdAndUpdate(request.params.id, request.body, { new: true });
        return result.json(book);
    },

    async destroy(request, result) {
        await Book.findByIdAndRemove(request.params.id);
        return result.send();
    }

};