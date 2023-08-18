function toggleContentOnImgClick (e) {
    const article = e.target.closest('article');
    const content = document.getElementById(`${article.id}-content`);
    content.hidden = !content.hidden;
}

const firstArticle = document.getElementById('first-article');
const secondArticle = document.getElementById('second-article');
firstArticle.focus();
secondArticle.focus();



/*



User Story: As a user I would like to be able to view all articles on this blog from an Iphone 8 and Samsung S8 screen.




User Story: As a user I would like to be able to differentiate between articles with alternating article blocks when scrolling through the list of articles.

User Story: As a user I would like to be able to choose between viewing the blog in light mode and dark mode.


How to make hidden content accessible if e.g. the page loads then goes offline? Will JS still work? Cause if it doesn't, then the content for each article is hidden permanently.

*/