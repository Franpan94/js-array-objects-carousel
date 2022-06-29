const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const groupimages = document.getElementById('group-images');

const listimages = [];
const listitle = [];
activatelement = 0;

images.forEach((image, i) => {
    
    const currenturl = document.createElement('img');
    currenturl.setAttribute('src', image.url);

    const currenntitle = document.createElement('div');
    currenntitle.innerHTML = `${image.title}`;
    
    currenturl.classList.add('width');

    listimages[i] = currenturl;
    listitle[i] = currenntitle;

    if(i===activatelement){
        currenturl.classList.add('ms_d-block');
        currenntitle.classList.add('ms_d-block');
    } else {
        currenntitle.classList.add('ms_d-none');
        currenturl.classList.add('ms_d-none');
    }

    groupimages.append(currenturl);
    groupimages.append(currenntitle);
})

const buttonprew = document.getElementById('btn-prew');
const buttonnext = document.getElementById('btn-next');

buttonnext.addEventListener('click', function(){
    
    listimages[activatelement].classList.add('ms_d-none');
    listimages[activatelement].classList.remove('ms_d-block');
    listitle[activatelement].classList.add('ms_d-none');
    listitle[activatelement].classList.remove('ms_d-block');
    activatelement++;
    if(activatelement === images.length){
        activatelement = 0;
    } else {
        listimages[activatelement].classList.remove('ms_d-none');
        listimages[activatelement].classList.add('ms_d-block');
        listitle[activatelement].classList.remove('ms_d-none');
        listitle[activatelement].classList.add('ms_d-block');
    }
})
