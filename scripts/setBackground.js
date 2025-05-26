export function setBackground(weather){
    let imagePath;
    switch(weather) {
        case 'Clear':
        imagePath = 'src/images/clear.jpg';
        break;
        case 'Cloud' :
        imagePath = 'src/images/cloud.jpg';
        break;
        case 'Rain' :
        imagePath = 'src/images/rainy.jpg';
        break;
        case 'Snow' :
        imagePath = 'src/images/snowy.jpg';
        break;

    }

    document.body.style.backgroundImage = `url('${imagePath}')`;


}
