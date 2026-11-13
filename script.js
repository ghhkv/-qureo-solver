document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // إظهار رسالة التقدم
    document.getElementById('progress').classList.remove('hidden');
    document.getElementById('progressText').innerText = 'جاري الاتصال بمنصة QUREO...';

    // محاكاة الاتصال أو تشغيل الأتمتة
    setTimeout(() => {
        if (username && password) {
            document.getElementById('progressText').innerText = 'تسجيل الدخول ناجح. جاري حل التدريبات...';
            console.log('تسجيل الدخول ناجح لـ:', username);
        } else {
            document.getElementById('progressText').innerText = 'فشل تسجيل الدخول. يرجى التحقق من بيانات الحساب.';
        }
    }, 2000);
});
