const posts = [
    { title: "Post One", body: 'This is the body on ONE' },
    { title: "Post Two", body: 'This is the body on Two' }
];

function getPost() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
            

    }, 1000);

}
getPost()




function createPost(post, callback){
    setTimeout(() => {
        posts.push(post)
        callback()

    }, 2000);
}

createPost({title: 'Post Three', body: 'This is my test post three.'}, getPost)