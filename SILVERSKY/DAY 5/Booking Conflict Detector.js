/*7️⃣ Booking Conflict Detector
Given booking list:
{
  roomId,
  startDate,
  endDate
}
Write:
checkConflict(bookings, newBooking)
Return true if overlapping exists.
(Use proper date comparison logic)
*/
booking_list = [
    { roomId: 101, startDate: "2024-01-01", endDate: "2024-01-05" },
    { roomId: 102, startDate: "2024-01-03", endDate: "2024-01-07" },
    { roomId: 101, startDate: "2024-01-10", endDate: "2024-01-15" }
];
function checkConflict(bookings, newBooking) {
    const newStart = new Date(newBooking.startDate);
    const newEnd = new Date(newBooking.endDate);
    for (let booking of bookings) {
        if (booking.roomId !== newBooking.roomId) {
            continue;
        }
        const existingStart = new Date(booking.startDate);
        const existingEnd = new Date(booking.endDate);
        if (newStart < existingEnd && newEnd > existingStart) {
            return true;
        }
    }
    return false;  // No conflict
}
new_booking = { roomId: 101, startDate: "2024-01-04", endDate: "2024-01-08" };
console.log(checkConflict(booking_list, new_booking));  
// Should return true due to overlap with first booking