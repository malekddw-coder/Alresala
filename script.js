document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('printingForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // جلب القيم من النموذج
        const name = document.getElementById('clientName').value;
        const service = document.getElementById('serviceType').value;
        const details = document.getElementById('details').value;
        const notes = document.getElementById('notes').value;
        const phone = "218927693885"; // الرقم الدولي

        // تنسيق رسالة الواتساب
        const message =
            `*طلب جديد من موقع مطبعة الرسالة*%0A` +
            `----------------------------%0A` +
            `*اسم العميل:* ${name}%0A` +
            `*نوع الخدمة:* ${service}%0A` +
            `*الكمية/المقاس:* ${details}%0A` +
            `*ملاحظات:* ${notes}%0A` +
            `----------------------------`;

        // فتح رابط واتساب في نافذة جديدة
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
});
