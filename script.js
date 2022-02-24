/*global $*/
$(function(){
    // jQuery書式
    // $('xxx').yyy('zzz');
    // <h1>jQueryの練習</h1>
    $('h1').text('jQueryの練習');
    // <h1 class="red">jQueryの練習</h1>
    $('h1').addClass('red');
    // ユーザーの設計図を作る
    class User{
               // プロパティ（変数）
               name; // 
               age; // 年齢
               // コンストラクタ
               constructor(name,age){
                   // プロパティに値をセット
                   this.name = name;
                   this.age = age;
   
                }
           }
           // 全ユーザーを保存する配列
           let users = [];
           
           // 初期データを生成するメソッド
           const init = () => {
        
           let kubota = new User('久保田',20);
           let shima = new User('島',18);
           let yamada = new User('山田',100);
           users.push(kubota);
           users.push(shima);
           users.push(yamada);
           
               
           }
         // initメソッドの実行
           init();
         // ユーザー全員を画面に表示するメソッド
         const disp_users = (users) => { 
           $.each(users, (index,user) => {
               // <ul></ul>
               let ul = $('<ul>');
               ul.append($('<li>', {text: index + 1}));
               // <ul><li>久保田</li></ul>
               ul.append($('<li>', {text: user.name}));
               ul.append($('<li>', {text: user.age + '歳'}));
               // <div><ul>.....</ul></div>
               $('div').append(ul);
           });
            
        }
             
        
         // disp_usersメソッドを実行
         disp_users(users);
         
         // ボタンが押された時
         $('button').on('click', function(){
             // 入力された名前を取得
             $('ul').remove();
             $('span').remove();
             let name = $('input[id="name"]').val();
             $('input[id="name"]').val('');
             let age = $('input[id="age"]').val();
             $('input[id="age"]').val('');
             
             let flag = true;
             if(name === ''){
                 $('input[id="name"]').after($('<span>', {text: '名前を入力してください'}));
                 flag = false;
             }
              if(age === ''){
                 $('input[id="age"]').after($('<span>', {text: '年齢を入力してください'}));
                 flag = false;
             }else if(!/^[0-9]+$/.test(age)){
                 $('input[id="age"]').after($('<span>', {text: '年齢は正の整数で入力してください'}));
                 flag = false;
                 
             }
             
             if(flag === true){
                 let new_user = new User(name, age);
                 users.push(new_user);
                 
             }
             
          disp_users(users);
 
         });
         
});