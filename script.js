    // نمایش الرت در 10 ثانیه
    setTimeout(function() {
        document.getElementById('alertMessage').style.display = 'block';
      }, 1000);
  
      // تابع برای نمایش بازخورد
      function showFeedback(isUseful) {
        if (isUseful) {
          alert('ممنون از بازخورد مفید شما!');
        } else {
          alert(' متاسفم که اینو می شنوم بازخورد شما با ما مهم است. !');
        }
        // مخفی کردن پنجره الرت
        document.getElementById('alertMessage').style.display = 'none';
      }