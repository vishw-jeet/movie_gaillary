cl= console.log;

const showmodal= document.getElementById('showmodal');
const backDrop = document.getElementById('backDrop');
const mymodal = document.getElementById('mymodal');

const addmovieBtn = document.getElementById('addmovieBtn');
const titleControl = document.getElementById('title');
const imgUrlControl = document.getElementById('imgurl');
const ratingControl = document.getElementById('rating');



const moviemodalClose = [ ...document.querySelectorAll ('.moviemodalClose')];

const onMovieCardArray = [{
    title:"",
    imageUrl:"",
    rating:"",
}]

const toggleMovieModal = () => {
    backDrop.classList.toggle('show');
    mymodal.classList.toggle('show');
}

moviemodalClose.forEach(closeEle => {
    closeEle.addEventListener('click',toggleMovieModal);
})

const onMovieCardAdd =(ele) =>{
    let movieObj = {
        title: titleControl.value,
        imageUrl: imgUrlControl.value,
        Rating: ratingControl.value,
    }
    cl(movieObj)
    onMovieCardArray.unshift(movieObj)
    cl(onMovieCardArray)
    titleControl.value="";
    imgUrlControl.value="";
    ratingControl.value="";
    
}

showmodal.addEventListener('click',toggleMovieModal);

addmovieBtn.addEventListener("click",onMovieCardAdd);