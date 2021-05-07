$(document).ready(function(){
    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    // array
    var array = [
        {
            profile : 'https://source.unsplash.com/random?q=1',
            nickname : 'nickname1',
            id : makeid(),
            time : Math.floor(Math.random()*10+1) + '시간',
            image : 'https://source.unsplash.com/random?q=1' ,
            contents : '다 별 내린 라이너 동경과 별 이웃 듯합니다. 위에 오는 무덤 계집애들의 마리아 까닭입니다. 강아지, 어머니 오면 그러나 하나에 시인의 경, 아직 버리었습니다. 새겨지는 파란 말 이런 북간도에 마리아 있습니다. 없이 위에 다 마디씩 했던 사람들의 무덤 하늘에는 있습니다.'
        },
        {
            profile : 'https://source.unsplash.com/random?q=2',
            nickname : 'nickname2',
            id : makeid(),
            time : Math.floor(Math.random()*10+1) + '시간',
            image : 'https://source.unsplash.com/random?q=2' ,
            contents : '밤을 지나고 내일 못 당신은 새워 이네들은 북간도에 자랑처럼 까닭입니다. 내 북간도에 남은 거외다.'
        }
        ,{
            profile : 'https://source.unsplash.com/random?q=3',
            nickname : 'nickname3',
            id : makeid(),
            time : Math.floor(Math.random()*10+1) + '시간',
            image : 'https://source.unsplash.com/random?q=3' ,
            contents : '하나에 이런 프랑시스 무성할 하늘에는 있습니다. 겨울이 동경과 가득 했던 사람들의 하나에 거외다. 이름을 어머니, 하나에 별들을 파란 별 하늘에는 언덕 아름다운 까닭입니다. 우는 새겨지는 많은 사람들의 어머니 새워 이름과, 봅니다. 북간도에 쓸쓸함과 새워 이름과 못 마리아 봅니다. 많은 언덕 하나에 벌써 계집애들의 아름다운 이름자 그리고 별들을 거외다. 하나에 쓸쓸함과 덮어 시와 애기 보고, 불러 있습니다. 무성할 이름을 못 내 별들을 있습니다. 까닭이요, 아이들의 별 어머니 이름을 없이 때 아스라히 까닭입니다. 하나에 때 쉬이 가을 흙으로 멀듯이, 있습니다.'
        },{
            profile : 'https://source.unsplash.com/random?q=4',
            nickname : 'nickname4',
            id : makeid(),
            time : Math.floor(Math.random()*10+1) + '시간',
            image : 'https://source.unsplash.com/random?q=4' ,
            contents : '이런 않은 별 때 위에 너무나 까닭입니다. 이름자를 걱정도 아직 있습니다. 없이 무엇인지 아무 다하지 동경과 이런 아침이 있습니다. 추억과 남은 비둘기, 있습니다. 새워 나의 패, 했던 시인의 듯합니다. 별 시인의 강아지, 옥 계절이 봅니다.'
        },{
            profile : 'https://source.unsplash.com/random?q=5',
            nickname : 'nickname5',
            id : makeid(),
            time : Math.floor(Math.random()*10+1) + '시간',
            image : 'https://source.unsplash.com/random?q=5' ,
            contents : '그러나 쓸쓸함과 새워 하나에 벌레는 봅니다. 딴은 하나의 속의 까닭이요, 별 시와 별 이네들은 봅니다. 그리워 아름다운 보고, 아직 써 까닭입니다. 별 비둘기, 이네들은 별 별 없이 시와 자랑처럼 다 까닭입니다.'
        }
    ];

    var container = $('.card-wrapper');
    $.each(array, function(i){
        container.append('<div class="card"><div class="block card-left"><div class="profile"><img class="card-profile-img" alt="Card profile image"></div></div><div class="block card-right"><div class="card-right-top"><h3 class="card-nickname"></h3><h4 class="card-id"></h4><h4 class="card-time"></h4><a href="#" class="bt-more">•••</a></div><div class="card-right-middle card-body"><p class="card-text"></p><div class="card-img-box"><img class="card-img-top" alt="Card image"></div></div><div class="buttons card-right-bottom"><a href="#" class="twitter-bt bt01"><img alt="Card bt01 image"></a><a href="#" class="twitter-bt bt02"><img alt="Card bt02 image"></a><a href="#" class="twitter-bt bt03"><img alt="Card bt03 image"></a><a href="#" class="twitter-bt bt04"><img alt="Card bt04 image"></a></div></div></div>');
    });

    var outHtml = '';
    var i=0;

    $.each(array, function(index, item) {
        outHtml= item.profile;     
        $(".card-profile-img").eq(i).attr("src", outHtml);
        outHtml+='<a href="'+item.link+'">';
        outHtml= item.nickname;
        $(".card-nickname").eq(i).html(outHtml);
        outHtml= item.id;
        $(".card-id").eq(i).html(outHtml);
        outHtml= item.time;
        $(".card-time").eq(i).html(outHtml);
        outHtml= item.contents;
        $(".card-text").eq(i).html(outHtml);
        outHtml= item.image;
        $(".card-img-top").eq(i).attr("src", outHtml);

        i=i+1;
    });


    // image hide random
    var random = Math.random();
    var randomNum = Math.floor(random*10)-1;
    if(random < 0.8){
        $('.card-img-box').eq(randomNum).css({'display': 'none'});
    }


            // common-bt array
    var btarray = [
        {
            bt01img: 'https://img.icons8.com/small/32/000000/twitter-reply.png',
            bt02img: 'https://img.icons8.com/small/32/000000/retweet.png',
            bt03img: 'https://img.icons8.com/material-outlined/32/000000/filled-like.png',
            bt04img: 'https://img.icons8.com/small/32/000000/share-3.png'
        }
    ];

    var outHtml = '';

    $.each(btarray, function(index, item){
        outHtml= item.bt01img;
        $(".bt01").find("img").attr("src", outHtml);
        outHtml= item.bt02img;
        $(".bt02").find("img").attr("src", outHtml);
        outHtml= item.bt03img;
        $(".bt03").find("img").attr("src", outHtml);
        outHtml= item.bt04img;
        $(".bt04").find("img").attr("src", outHtml);
    });



    //    button click event
    $('.bt-more').click(function(){
        alert('btMore clicked');
    });
    $('.card-img-top').click(function(){
        alert('imgResize clicked');
    });
    $('.bt01').click(function(){
        alert('btReply clicked');
    });
    $('.bt02').click(function(){
        alert('btRetweet clicked');
    });
    $('.bt03').click(function(){
        alert('btLike clicked');
    });
    $('.bt04').click(function(){
        alert('btShare clicked');
    });
});