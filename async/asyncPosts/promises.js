const posts = [
    { title: "Post One", body: 'This is the body on ONE' },
    { title: "Post Two", body: 'This is the body on Two' }
];

function getPost() {
    setTimeout(() => {
        let output = ''
        // eslint-disable-next-line no-unused-vars
        posts.forEach((post, _) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
            

    }, 1000);

}
getPost()



 // eslint-disable-next-line no-unused-vars
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false;

            if (!error) {
                resolve()
            } else {
                reject('Error something went wrong')

                
            }
        }, 2000);

    })

    
}
// createPost({ title: 'Post Three', body: 'This is my test post three.' })
//     .then(getPost)
//     .catch(err => console.log(err))

const promise1 = Promise.resolve('Hello World')
const promise2 = 10
 // eslint-disable-next-line no-unused-vars
const promise3 = new Promise((resolve, _reject) => {
    setTimeout(resolve, 2000, "Goodbye")
})
const promise4 =
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .catch(err => console.log(err))
    

const promise5 = fetch('http://127.0.0.1:8000/api/rooms/')
    .then(res => res.json())
    .catch(err => console.log(err))
    

Promise.all([promise1, promise2, promise3, promise4, promise5]).then((values) => console.log(values))