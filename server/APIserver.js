
const express = require('express');
app = express();

var path = require('path');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mysql = require('mysql');
const util = require('util');

//create connection config to db
const db = mysql.createConnection({
    host: '159.203.188.129',
    user: 'root',
    password: 'ggtggtggt1',
    database: 'netflix'
})

//promisify queries
const myQuery = util.promisify(db.query).bind(db);

//connect to db

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!')
});


app.listen(1314, () => {
    console.log('API Server listening on port 1314!')
})


app.get('/', (req, res) => {
    res.send('test!')
})



let dbMovieDetails = [
    {
        movieID: 1,
        movieName: 'Never Have I Ever',
        movieCategory: 'Popular On Netflix',
        movieThumbnail: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5KksxMnJrkw_dcJypT_UhPFzelf3xlXykdh8sV_IzEeE7SOJjB4TXhb_-nhmW4vql4p2jDa--NZk__UGCtl4aol1Aa-7jp2XC8SaRqS7mkmZPNsrm0O7G0av8b.jpg?r=4d2',
        movieMatchRating: 97,
        movieYear: 2020,
        movieAgeRating: 'M18',
        movieSeasons: '1 Season',
        movieSynopsis: "After a traumatic year, an Indian-American teen just wants to spruce up her social status - but friends, family and feelings won't make it easy on her.",
        movieCast: 'Maitreyi Ramakrishnan, Poorna Jagannathan, Richa Moorjani',
        movieCreators: 'Mindy Kaling, Lang Fisher',
        movieEpisodes: [
            { episode: 1, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/image1.jpg', title: 'Pilot', duration: 28, episodeSynopsis: "After recent trauma, Devi starts her first day as a high school sophomore determined to shake off old labels and finally become cool." },

            { episode: 2, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/image2.jpg', title: '... had fun with Paxton Hall-Yoshida', duration: '29m', episodeSynopsis: "Devi hesitates to tell her friends the truth about her awkward interactions with Paxton. The prospect of an arranged marriage puts Kamala under pressure." },

            { episode: 3, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/image3.jpg', title: '... gotten drunk with the popular kids', duration: '30m', episodeSynopsis: "Devi hopes to win cool points with Paxton at a party, until a surprising turn of events happens. Hidden emotions emerge for Fabiola. Kamala makes a choice." },

            { episode: 4, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/image4.jpg', title: '... felt super Indian', duration: '22m', episodeSynopsis: "At Ganesh Puja celebrations, Devi questions how much she identifies with Indian culture, Nalini dodges acerbic aunties and Kamala frets over her future." },

            { episode: 5, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/image5.jpg', title: '... started a nuclear war', duration: '29m', episodeSynopsis: "Devi allows rumors about her and Paxton to swirl during an overnight school trip. Fabiola opens up to Eleanor, who gets upsetting news about her mother." },
        ]

    },

    {
        movieID: 2,
        movieName: 'The King',
        movieCategory: 'Popular On Netflix',
        movieThumbnail: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSW0zKZi3bsk34wxvn3dPGjFxSj06aTD6dOzEQU4_UU2J5WRBVXm-kAGkXjsf2q4KP5bD6TactIKnK1VGSPISkM4lt9AzjUAshyA79J_rQ2D-sLfU9I5Df6ZLz0oiaBpTcsy31txcwGid6SnVxd_SH80Pk3HmkRt1x5W3l6UydVR2TVSG0nXO4XNXaS_MgLlToBoAUQl2-a1QC7WiP2PNkZA.jpg?r=257',
        movieMatchRating: 99,
        movieYear: 2020,
        movieAgeRating: 'PG13',
        movieSeasons: '1 Season',
        movieSynopsis: "A mondern-day Korean emperor passes through a mysterious portal and into a parallel world, where he encounters a feisty polic detective.",
        movieCast: 'Lee Min-ho, Kim Go-eun, Woo Do-hwan',
        movieCreators: 'Kim Eun-sook, Baek Sang-hoon, Jun Jee-hyun',
        movieEpisodes: [
            { episode: 1, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/king-ep1.jpg', title: 'Episode 1', duration: '1h 12m', episodeSynopsis: "Lee Gon mourns the tragic death of his father. Lee Lim goes on the run- and finds escape when he comes across a door to a parallel universe." },

            { episode: 2, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/king-ep2.jpg', title: 'Episode 2', duration: '1h 12m', episodeSynopsis: "Gon insists he is an emperor from another world. An incredulous Jeong Tae-eul takes him to the police station, where he sees a familiar face." },

            { episode: 3, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/king-ep3.jpg', title: 'Episode 3', duration: '1h 11m', episodeSynopsis: "Though Tae-eul finds Gon's story difficult to believe, some things about him are completely inexplicable. At work, she gets busy with a murder case." },

            { episode: 4, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/king-ep4.jpg', title: 'Episode 4', duration: '1h 12m', episodeSynopsis: "When Tae-eul loses her police badge, she can't help but think about Gon. Meanwhile, Kang Sin-jae has had it with his mother's bad habits" },

            { episode: 5, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/king-ep5.jpg', title: 'Episode 5', duration: '1h 12m', episodeSynopsis: "Being introduced to Gon's world is a lot to process for Tae-eul, who's taken to the palace. A disgruntled Jo Yeong keeps an eye on her" },

            { episode: 6, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/king-ep6.jpg', title: 'Episode 6', duration: '1h 12m', episodeSynopsis: "A potential military conflict threatens the kingdom. Gon promises Tae-eul he will return to her, and steps forward to take care of the situation." },

            { episode: 7, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/king-ep7.jpg', title: 'Episode 7', duration: '1h 12m', episodeSynopsis: "Gon brings Yeong along on his trip back to Tae-eul. He has a favour to ask of her, while she's found something troubling to share with him." },
        ]

    },

    {
        movieID: 3,
        movieName: 'Hi Bye Mama',
        movieCategory: 'Popular On Netflix',
        movieThumbnail: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABavGNbYbTcDVYEj2wSh67wtui5d69UscvdZsZiir2qbdmQLPlDzJsF4yUCWFXOMPX5eVMa5vj9RaODiOBS2UCv2SI-L1cwumhjbm__M8ITxZCgzMX1OSw29iUFfJF5etZ9Uk7-0fX6kkAXbvm4WfLaniChVFW3VDwnI0SxjYQQbDKGJK6tFKx4aU733b6RLmrPSzdAT8iIB71pQItt566VqN.jpg?r=b0a',
        movieMatchRating: 95,
        movieYear: 2020,
        movieAgeRating: 'PG13',
        movieSeasons: '1 Season',
        movieSynopsis: "Cho Gang-hwa is shaken by the sight of Yu-ri, who's got 49 days to find her rightful place. What's more, Cho Seo-woo has gone missing.",
        movieCast: 'Kim Tae-hee, Kim Go-eun, Lee Kyoo-hyung',
        movieCreators: 'Yu Je-Won, Kwon Hye-joo',
        movieEpisodes: [
            { episode: 1, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/mama1.jpg', title: 'Life is Full of Unpredictable Surprises', duration: '1h 14m', episodeSynopsis: "Cha Yu-ri, a ghost for five years, realizes her daughter can see her. Just as she decides it's time to move on, she is returned to her human form." },

            { episode: 2, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/mama2.jpg', title: 'Forgotten Season', duration: '1h 9m', episodeSynopsis: "Cho Gang-hwa is shaken by the sight of Yu-ri, who's got 49 days to find her rightful place. What's more, Cho Seo-woo has gone missing." },

            { episode: 3, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/mama3.jpg', title: 'Realizing the Beauty of Life is Only Possible After Death', duration: '1h 8m', episodeSynopsis: "Though Tae-eul finds Gon's story difficult to believe, some things about him are completely inexplicable. At work, she gets busy with a murder case." },

            { episode: 4, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/mama4.jpg', title: "There is Nothing that Won't Happen to Me", duration: '1h 11m', episodeSynopsis: "When Tae-eul loses her police badge, she can't help but think about Gon. Meanwhile, Kang Sin-jae has had it with his mother's bad habits" },

            { episode: 5, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/mama5.jpg', title: 'Every Moment When Chance Turns into Fate', duration: '1h 3m', episodeSynopsis: "Being introduced to Gon's world is a lot to process for Tae-eul, who's taken to the palace. A disgruntled Jo Yeong keeps an eye on her" },

            { episode: 6, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/mama6.jpg', title: 'Even in the Face of Death, Family is Still My Number One', duration: '1h 7m', episodeSynopsis: "A potential military conflict threatens the kingdom. Gon promises Tae-eul he will return to her, and steps forward to take care of the situation." },

            { episode: 7, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/mama7.jpg', title: "People Who Can't Say Goodbye", duration: '1h 11m', episodeSynopsis: "Gon brings Yeong along on his trip back to Tae-eul. He has a favour to ask of her, while she's found something troubling to share with him." },

            { episode: 8, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/mama8.jpg', title: "Love That Binds Us All", duration: '1h 17m', episodeSynopsis: "A disgruntled Jo Yeong keeps an eye on her. She's found something troubling to share with him, while his wife finds out the truth." }
        ]

    },

    {
        movieID: 4,
        movieName: 'Into The Night',
        movieCategory: 'Popular On Netflix',
        movieThumbnail: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZW97BvzlfoMMAUL7KAA9oFzopDlgQLOiPhItHVN4MDbyI32WCV0_G-FFtwP5hp6Fr2iOIxpQMLnnh_9q0rZL-jhy-CJ6hVj1iZ5tJhJkoxWW_Q_6QZ7VLU2qC6WxRuiizs1xZbi0yYghBGUSwMp0yOxALU6Nbyl6YhxDMxPrKtdz38R0G1GwjQ.jpg?r=a6e',
        movieMatchRating: 98,
        movieYear: 2020,
        movieAgeRating: 'NC16',
        movieSeasons: '1 Season',
        movieSynopsis: "Passengers and crew aboard a hijacked overnight flight scramble to outrace the sun as a mysterious cosmic event wreaks havoc on the world below.",
        movieCast: 'Pauline Etienne, Laurent Capelluto, Stefano Cassetti',
        movieCreators: 'Jason George',
        movieEpisodes: [
            { episode: 1, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/into1.jpg', title: 'Sylvie', duration: '40m', episodeSynopsis: "When an armed man storms her late-night flight to Moscow, former military pilot Sylvie finds herself pulled into the cockpit to help." },

            { episode: 2, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/into2.jpg', title: 'Jakub', duration: '38m', episodeSynopsis: "Mechanic Jakub clashes with the others about what to do next. A Wi-Fi signal brings troubling new intel on the disaster - and on some of the passengers." },

            { episode: 3, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/into3.jpg', title: 'Matheiu', duration: '35m', episodeSynopsis: "As the group deals with a series of mechanical crises, Terenzio challenges Mathieu's authority, and Horst makes contact with another plane." },

            { episode: 4, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/into4.jpg', title: 'Ayaz', duration: '37m', episodeSynopsis: "Rik organizes a hasty trial to decide Ayaz's fate, Terenzio reveals rumors of a NATO refuge, and Sylvie begins to worry about Mathieu's state of mind." },

            { episode: 5, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/into5.jpg', title: 'Rik', duration: '37m', episodeSynopsis: "The mission to NATO headquarters takes a dramatic turn. Laura and Horst tend to a medical emergency. Jakub and Osman race to solve the fuel problem." },

            { episode: 6, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/into6.jpg', title: 'Terenzio', duration: '37m', episodeSynopsis: "Emotions run high as the group makes one last desperate bid to reach safety before dawn breaks." }
        ]

    },

    {
        movieID: 5,
        movieName: 'Extracurricular',
        movieCategory: 'Popular On Netflix',
        movieThumbnail: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYKz98Slo71kxt3yu8Ucpxebz0zWIv9wDI_wih8V2aIcDSAY7RSTxJ-EtrqjNAQYGVEekLPxvBsHSTvDJBKR1iil-Co7Q-csXXZcvixEVyd1GvuQQG8Ty6p5Q-aH.jpg?r=8ed',
        movieMatchRating: 98,
        movieYear: 2020,
        movieAgeRating: 'R21',
        movieSeasons: '1 Season',
        movieSynopsis: "A model high school student who's steeped in a world of serious crime finds his double life upended when a classmate takes an interest in his secret.",
        movieCast: 'Kim Dong-hee, Jung Da-bin, Park Ju-hyun',
        movieCreators: 'Gin Han-sai, Kim Jin-Min',
        movieEpisodes: [
            { episode: 1, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/extra1.jpg', title: 'Episode 1', duration: '57m', episodeSynopsis: "Lee Gon mourns the tragic death of his father. Lee Lim goes on the run- and finds escape when he comes across a door to a parallel universe." },

            { episode: 2, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/extra2.jpg', title: 'Episode 2', duration: '1h 9m', episodeSynopsis: "Gon insists he is an emperor from another world. An incredulous Jeong Tae-eul takes him to the police station, where he sees a familiar face." },

            { episode: 3, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/extra3.jpg', title: 'Episode 3', duration: '53m', episodeSynopsis: "Though Tae-eul finds Gon's story difficult to believe, some things about him are completely inexplicable. At work, she gets busy with a murder case." },

            { episode: 4, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/extra4.jpg', title: 'Episode 4', duration: '44m', episodeSynopsis: "When Tae-eul loses her police badge, she can't help but think about Gon. Meanwhile, Kang Sin-jae has had it with his mother's bad habits" },

            { episode: 5, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/extra5.jpg', title: 'Episode 5', duration: '47m', episodeSynopsis: "Being introduced to Gon's world is a lot to process for Tae-eul, who's taken to the palace. A disgruntled Jo Yeong keeps an eye on her" },

            { episode: 6, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/extra6.jpg', title: 'Episode 6', duration: '55m', episodeSynopsis: "A potential military conflict threatens the kingdom. Gon promises Tae-eul he will return to her, and steps forward to take care of the situation." },

            { episode: 7, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/extra7.jpg', title: 'Episode 7', duration: '46m', episodeSynopsis: "Gon brings Yeong along on his trip back to Tae-eul. He has a favour to ask of her, while she's found something troubling to share with him." },
        ]

    },

    {
        movieID: 6,
        movieName: 'Dead To Me',
        movieCategory: 'Popular On Netflix',
        movieThumbnail: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd-CfDMElyndVUd2BmaOmPh3oUNgE0VFvzmfOKt8DAmQ7BAAJWnpAUxENF3tq99x6eoCkXksJPyvGCEIp1ONnywLgJqJ0a4czzSzZZ57uKZ654o77XEfd-zjvB5Gnmsfs1tC1U3tJdJqlUFib2_6cXG3c7ROsA.jpg?r=ab0',
        movieMatchRating: 98,
        movieYear: 2020,
        movieAgeRating: 'M18',
        movieSeasons: '2 Seasons',
        movieSynopsis: "A hotheaded widow searching for the hit-and-run driver who mowed down her husband befriends an eccentric optimist who isn't quite what she seems.",
        movieCast: 'Christina Aookegate, Linda Cardellini, James Marsden',
        movieCreators: 'Liz Feldman',
        movieEpisodes: [
            { episode: 1, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/dead1.jpg', title: 'Pilot', duration: '33m', episodeSynopsis: "Overwhelmed by grief and anger after her husband's sudden death, acerbic real estate agent Jen meets tenderhearted Judy at a support group." },

            { episode: 2, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/dead2.jpg', title: "Maybe I'm Crazy", duration: '30m', episodeSynopsis: "Amid her escalating rage over the stalled investigation into her husband's death, Jen becomes more entangled in Judy's messy personal life." },

            { episode: 3, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/dead3.jpg', title: "It's All My Fault", duration: '32m', episodeSynopsis: "On what would have been her husband's 50th birthday, Jen clashes with her disapproving mother-in-law over the best way to mark the occasion." },

            { episode: 4, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/dead4.jpg', title: "I Can't Go Back", duration: '27m', episodeSynopsis: "When Jen discovers that her late husband harbored a devastating secret, she enlists Judy's help in tracking down more information." },

            { episode: 5, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/dead5.jpg', title: "I've Gotta Get Away", duration: '31m', episodeSynopsis: "The mission to NATO headquarters takes a dramatic turn. Laura and Horst tend to a medical emergency. Jakub and Osman race to solve the fuel problem." },

            { episode: 6, episodeThumbnail: 'http://159.203.188.129:1313/episodeImages/dead6.jpg', title: 'Oh My God', duration: '27m', episodeSynopsis: "Jen realies her sons aren't coping with their dad's death as well as she thought they were. Judy joins Nick as he investigates the hit-and-run." }
        ]

    },

];

//this is my resetter
app.get('/addMovie', async (req, res) => {
    //add movies into database table
    for (let i = 0; i < dbMovieDetails.length; i++) {

        console.log(dbMovieDetails[i]);
        let addRecord = await myQuery('INSERT INTO movies SET ?',
            {
                // movieID: dbMovieDetails[i].movieID,
                movieName: dbMovieDetails[i].movieName,
                movieCategory: dbMovieDetails[i].movieCategory,
                movieThumbnail: dbMovieDetails[i].movieThumbnail,
                movieMatchRating: dbMovieDetails[i].movieMatchRating,
                movieYear: dbMovieDetails[i].movieYear,
                movieAgeRating: dbMovieDetails[i].movieAgeRating,
                movieSeasons: dbMovieDetails[i].movieSeasons,
                movieSynopsis: dbMovieDetails[i].movieSynopsis,
                movieCast: dbMovieDetails[i].movieCast,
                movieCreators: dbMovieDetails[i].movieCreators,
                movieEpisodes: JSON.stringify(dbMovieDetails[i].movieEpisodes)

            }
        )
    }

    res.send('movies added!');


})





app.get('/movies/:id', async (req, res) => {
    let movieID = parseInt(req.params.id);


    let dbData = await myQuery(`SELECT * FROM movies WHERE movieID = ${movieID}`);

    res.send(dbData);


})

app.get('/movies', async (req, res) => {

    let dbData = await myQuery('SELECT * FROM movies');
    res.send(dbData);
})


app.post('/movies', async (req, res) => {
    let dbMovieDetails = req.body;
    console.log(dbMovieDetails);

    //add movies into database table
    let addRecord = await myQuery('INSERT INTO movies SET ?',
        {
            movieName: dbMovieDetails.movieName,
            movieCategory: dbMovieDetails.movieCategory,
            movieThumbnail: dbMovieDetails.movieThumbnail,
            movieMatchRating: dbMovieDetails.movieMatchRating,
            movieYear: dbMovieDetails.movieYear,
            movieAgeRating: dbMovieDetails.movieAgeRating,
            movieSeasons: dbMovieDetails.movieSeasons,
            movieSynopsis: dbMovieDetails.movieSynopsis,
            movieCast: dbMovieDetails.movieCast,
            movieCreators: dbMovieDetails.movieCreators,
            movieEpisodes: JSON.stringify(dbMovieDetails.movieEpisodes)
        }
    )
    res.send('movies added!');
})



//ability to update any column in any record from CMS (change to app.patch('/movies') later)
app.patch('/movies', async (req, res) => {
    //I will get movieID, and all the columns that CMS admin want to change for this movieID.


    let thingsToChange = req.body;
    console.log(thingsToChange)

    //step 1: loop and store [key,value] pairs into normalColumns array
    let allColumns = Object.keys(thingsToChange).map((key) => {
        return [key, thingsToChange[key]]
    })
    console.log("all columns:", allColumns)


    //step1: get movieIDArray = ['movieID',1]
    let movieIDArray = allColumns.find((item) => {
        return item[0] == "movieID"
    })
    console.log("movieIDArray:", movieIDArray)

    //step 2: get pure normal columns array
    let normalColumns = allColumns.filter((item) => {
        return item[0] != "movieID" && item[0] != "movieEpisodes"
    })
    console.log('normal columns array:', normalColumns);

    // step 3: craft mysql portion for normal
    let editStatement = ''
    normalColumns.forEach((item) => {
        editStatement = editStatement + `${item[0]}="${item[1]}",`
    })
    console.log('edit columns sql statement:', editStatement)



    //get JSON column array
    let JSONColumnArray = allColumns.find((item) => {
        return item[0] == "movieEpisodes"
    })
    console.log('JSON COLUMN ARRAY:', JSONColumnArray);


    //after storing into JS object, convert to JSON string for query to JSON field in mysql.
    let newObject = JSON.stringify(JSONColumnArray[1]);
    // console.log('stringified json object to update:', newObject);
    
    
    let JSON_SQL = `${JSONColumnArray[0]}='${newObject}'`;
    editStatement = editStatement + JSON_SQL;

    console.log(editStatement);


    let dbResponse = await myQuery(`UPDATE movies SET ${editStatement} WHERE movieID = ${movieIDArray[1]}`)

    res.send('columns updated!');



    
})

app.delete('/movies', async (req,res)=>{
    let movieIDArray = req.body.movieIDArray;
     
    let deleteCondition = '('
    for (let i=0; i<movieIDArray.length; i++){
        deleteCondition = deleteCondition + `${movieIDArray[i]},`
    }

    //now delete condition looks lik "(2,4,5,"    , so slice ',' and add ')'
    deleteCondition = deleteCondition.slice(0, -1);
    deleteCondition = deleteCondition + ")";

    //delete and reset movieID
    let dbResponse = await myQuery(`
    DELETE FROM movies WHERE movieID IN ${deleteCondition};`)

    res.send('deleted!');


})

app.post('/addEpisode', async (req, res) => {
    //STEP 1: STRINGIFY JAVASCRIPT OBJECT TO JSON.
    let newEpisodeData = JSON.stringify(req.body.testEpisode);

    let movieName = req.body.movieName;

    console.log(newEpisodeData);

    //STEP 2: QUERY (Use CAST('${data}' AS JSON) to let mysql know im sending stringified JSON.)
    let dbResponse = await myQuery(`UPDATE movies SET movieEpisodes = JSON_ARRAY_APPEND(movieEpisodes,'$', CAST('${newEpisodeData}' AS JSON)) WHERE movieName = '${movieName}'`)

    res.send('hi');
})
