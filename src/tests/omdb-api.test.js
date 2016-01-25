import request from 'request';
import expect from 'expect';
import Joi from 'joi';

const log = (...stuff) => {
    console.log(stuff);
};

const validate = (body, schema) => {
    const parsedBody = JSON.parse(body);

    Joi.validate(parsedBody, schema, {convert: false}, (validationError) => {
        expect(validationError).toBe(null);
    });
};

describe('omdb api', () => {
    it('should return not empty array of movies when valid \'s\' parameter is provided', (done) => {
        // given
        const schema = Joi.object({
            Search: Joi.array().min(1)
        });

        request.get('http://www.omdbapi.com/?s=Batman', (error, response, body) => {
            validate(body, schema);
            done();
        });
    });

    it('should return all episodes from a season', (done) => {
        const schema = Joi.object({
            Title: Joi.string(),
            Season: Joi.string(),
            Response: Joi.string(),
            Episodes: Joi.array().min(1).items(Joi.object(
                {
                    Title: Joi.string(),
                    Released: Joi.string(),
                    Episode: Joi.string(),
                    imdbRating: Joi.string(),
                    imdbID: Joi.string()
                }))
        });

        request.get('http://www.omdbapi.com/?i=tt0108778&season=1', (error, response, body) => {
            validate(body, schema);
            done();
        });
    });
});
