"use strict";

const tableBody = document.querySelector("#table tbody");

firebase
  .database()
  .ref("appointments")
  .on("value", function (snapshot) {
    const data = snapshot.val();
    const appointments = [];

    for (let id in data) {
      const entry = data[id];

      const [year, month, day] = entry.day.split("-").map(Number); // "YYYY-MM-DD"

      // نفصل الوقت والـ AM/PM
      const [timePart, ampm] = entry.time.trim().split(" "); // مثلاً "11 AM" أو "1:30 PM"

      // لو الوقت مفهوش :
      let hourStr, minuteStr;

      if (timePart.includes(":")) {
        [hourStr, minuteStr] = timePart.split(":");
      } else {
        hourStr = timePart;
        minuteStr = "00"; // افتراضيًا نخلي الدقايق صفر
      }

      let hour = Number(hourStr);
      const minute = Number(minuteStr);

      // تعديل الساعة حسب AM / PM
      if (ampm.toUpperCase() === "PM" && hour !== 12) {
        hour += 12;
      } else if (ampm.toUpperCase() === "AM" && hour === 12) {
        hour = 0;
      }

      const fullDate = new Date(year, month - 1, day, hour, minute);

      appointments.push({
        name: entry.name,
        phone: entry.phone,
        day: entry.day,
        time: entry.time,
        timestamp: fullDate.getTime(),
      });
    }

    // ترتيب حسب التاريخ والساعة
    appointments.sort((a, b) => a.timestamp - b.timestamp);

    // تفريغ tbody قبل إضافة بيانات جديدة
    tableBody.innerHTML = "";

    // تعبئة tbody
    appointments.forEach((appt) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${appt.day}</td>
        <td>${appt.time}</td>
        <td>${appt.name}</td>
        <td>${appt.phone}</td>
      `;
      tableBody.appendChild(row);
    });
  });
