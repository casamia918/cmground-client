const util = require('util');
const _ = require('lodash');

const fetchCommentPage = require('youtube-comment-api')

const results = [];
const authorHash = {};
function fetchAllComment(videoId, nextPageToken = null, page = 1) {
  return fetchCommentPage(videoId, nextPageToken).then(commentPage => {
    const { comments, nextPageToken } = commentPage;

    const commentReplies_ = comments.filter(c => c.hasReplies).map(c => c.replies);
    const commentReplies = _.chain(commentReplies_).flatten().compact().value();

    commentReplies.forEach(c => {
      c.page = page;
    })

    comments.forEach(c => {
      delete c.replies;
      delete c.repliesToken;
      c.page = page;
    })

    results.push(...comments);
    results.push(...commentReplies);

    if (nextPageToken) {
      return fetchAllComment(videoId, nextPageToken, page + 1);
    } else {
      console.log("fetch all comment done");
      return { allComents: results, authorHash };
    }
  })
}

function test() {
  const videoId = 'V192e4falEw'
  fetchAllComment(videoId)
    .then(() => {
      console.log(util.inspect(results, { showHidden: false, depth: null }))
      console.log(results.length);

      results.forEach(comment => {
        const { author, authorLink, id } = comment;
        authorHash[authorLink] = authorHash[authorLink] || [];
        authorHash[authorLink].push({ author, id });
      })

      console.log('---------------------------------------------');

      _.forEach(authorHash, (comments, key) => {
        if (comments.length > 1) {
          const { author } = comments[0];
          console.log(`author: ${author} wrotes ${comments.length} comments`);
        }
      })

    }).catch(console.log)
}



export default fetchAllComment;

if (process.env.TEST) {
  test();
}