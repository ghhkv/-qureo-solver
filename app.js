document.getElementById('qureoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const portalUrl = document.getElementById('portalUrl').value;
    const statusBadge = document.getElementById('systemStatus');
    const terminal = document.getElementById('terminalLog');

    if (!username) {
        alert("الرجاء إدخال اسم المستخدم أولاً!");
        return;
    }

    // تحديث الواجهة وحالة النظام
    statusBadge.innerText = 'جاري التشغيل...';
    statusBadge.className = 'badge active';
    
    terminal.innerHTML += `<br>[تنبيه] جاري الاتصال بالرابط: ${portalUrl}`;
    terminal.innerHTML += `<br>[أمان] التحقق من بيانات الحساب للمستخدم: ${username}`;

    setTimeout(() => {
        terminal.innerHTML += `<br>[نجاح] تم الاتصال بالمنصة وتسجيل الدخول بنجاح.`;
        terminal.innerHTML += `<br>[معالجة] جاري فحص الفصول وتحليل التدريبات البرمجية...`;
    }, 1500);

    setTimeout(() => {
        terminal.innerHTML += `<br>[حل تلقائي] تم إكمال الفصول بنجاح تام!`;
        document.getElementById('completedChapters').innerText = '42 / 42';
        statusBadge.innerText = 'مكتمل';
    }, 4000);
});
