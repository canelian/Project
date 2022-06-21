// 이미지 변경 함수
const img_url = [
  'img/small-size/imgsmall-01.jpg',
  'img/small-size/imgsmall-02.jpg',
  'img/small-size/imgsmall-03.jpg',
  'img/small-size/imgsmall-04.jpg',
  'img/small-size/imgsmall-05.jpg',
  'img/small-size/imgsmall-06.jpg',
  'img/small-size/imgsmall-07.jpg'
];

// 작가정보
const author = [
  'Pascal Elpidio',
  'Jennigje Lutfi',
  'Nina Valentína'
]

$(function() {

  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  console.log(year, month, date);
  console.log(hour, min, sec); 

  // html에 날짜 출력
  $('.year').html(year);
  $('.month').html(month);
  $('.date').html(date);
  $('.hour').html(hour);
  $('.min').html(min);
  $('.sec').html(sec);


  function changeBg() {  
    // 0 ~ 2랜덤값 생성(이미지 번호)
    let imgNum = Math.floor(Math.random()*7)
    console.log(imgNum);
    
    // 이미지 변경  
    $('body').css({
      background: `url('img/rectangle1.jpg'),
      url(${img_url[imgNum]})`
    })
  }

  // setInterval(함수, 시간ms)
  setInterval(changeBg, 5000);

});
  
  // 응용과제: 이미지를 총 6장으로 추가 랜덤 수정