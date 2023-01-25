const promessa = new Promise(function(resolve, reject){
    return reject('error')
    //return resolve('deu bom')
})

async function start() {
    try{
        const result = await promessa
        console.log(result)
    } catch(e){
        console.log(e)
    }finally {
        console.log('acabou')
    }
}

start()


async function apiCall() {
    try {
      const response = await fetch("https://api.github.com/users/vitor115");
      const user = await response.json();
      const reposResponse = await fetch(user.repos_url);
      const repos = await reposResponse.json();
      console.log(repos);
    } catch (e) {
      console.log(e);
    }
  }
  apiCall();

  async function apiCall2() {
    const url = "https://api.github.com/users/vitor115";
    const user = await fetch(url).then(r =>r.json);
    const userRepos = await fetch(user.repos_url).then(r => r.json());
    console.log(userRepos);
  }
  apiCall2().catch(e =>console.log(e));
  

import axios from "axios";

async function fetchRepos(){
  try{
    const user = await axios.get("https://api.github.com/users/vitor115")
    const repos = await axios.get(user.data.repos_url)
  console.log(repos.data)

  }catch(e){
    console.log(e)
  }
  
}

fetchRepos()