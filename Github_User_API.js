function createNode(element) { 
		return document.createElement(element); 
		} 
		
function append(parent, el) { 
		return parent.appendChild(el); 
		}

const attach = document.getElementById('attach');

const url = 'https://api.github.com/users';

fetch(url) 
.then((resp) => resp.json()) 
.then(function(data) { 
		return data.map(function(user) {	
				
				let div = createNode('div'), 
				img = createNode('img'), 
				section1 = createNode('section'),
				section2 = createNode('section'), 
				section3 = createNode('section'), 
				section4 = createNode('section'), 
				section5 = createNode('section'), 
				section6 = createNode('section'); 
				
		  img.src = user.avatar_url;          
     section1.innerHTML = `Username<br>${user.login}`;
     section2.innerHTML = `Github Profile Link<br>${user.html_url}`;
     section3.innerHTML = `Github Followers Link<br>${user.followers_url}`;
     section4.innerHTML = `Github Following Link<br>${user.following_url}`;
     section5.innerHTML = `Github Repository Link<br>${user.repos_url}`;
     section6.innerHTML = `Github User Type<br>${user.type}`;
	append(div,img); 
	append(div,section1)
	append(div,section2)
	append(div,section3)
	append(div,section4)
	append(div,section5)
	append(div,section6)
	append(attach,div)		  
		  
		  }) }) 
		  .catch(function(error) { console.log(error); 
		  		}); 

