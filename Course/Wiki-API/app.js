import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import mongoose from 'mongoose';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/WikiDB');

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model('Article', articleSchema);

app.get('/articles', async (req, res) => {
    try {
        const foundArticles = await Article.find();
        res.send(foundArticles);
    } catch (err) {
        res.send(err);
    }
});

app.post('/articles', async (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    try {
        await newArticle.save();
        res.send('Successfully added a new article.');
    } catch (err) {
        res.send(err);
    }
});

app.delete('/articles', async (req, res) => {
    try {
        await Article.deleteMany();
        res.send('Successfully deleted all articles.');
    } catch (err) {
        res.send(err);
    }
});

app.get('/articles/:articleTitle', async (req, res) => {
    try {
        const foundArticle = await Article.findById(req.params.articleTitle);
        if (foundArticle) {
            res.send(foundArticle);
        } else {
            res.send('No article found with that Title.');
        }
    } catch (err) {
        res.send(err);
    }
});

app.put('/articles/:articleTitle', async (req, res) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.articleTitle,
            { title: req.body.title, content: req.body.content },
            { new: true, overwrite: true }
        );
        if (updatedArticle) {
            res.send('Successfully updated the article.');
        } else {
            res.send('No article found with that Title.');
        }
    } catch (err) {
        res.send(err);
    }
});

app.patch('/articles/:articleTitle', async (req, res) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.articleTitle,
            { $set: req.body },
            { new: true }
        );
        if (updatedArticle) {
            res.send('Successfully modified the article.');
        } else {
            res.send('No article found with that Title.');
        }
    } catch (err) {
        res.send(err);
    }
});

app.delete('/articles/:articleTitle', async (req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.articleTitle);
        if (deletedArticle) {
            res.send('Successfully deleted the article.');
        } else {
            res.send('No article found with that Title.');
        }
    } catch (err) {
        res.send(err);
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
