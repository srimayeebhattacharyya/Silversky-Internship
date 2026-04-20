// 9️⃣ User Activity Analyzer
// Given logs:
// {
//   userId,
//   action,
//   timestamp
// }
// Write logic to:
// Count actions per user
// Find most active user
// Find peak activity hour
// Count unique users
logs= [
    { userId: 1, action: "login", timestamp: "2024-01-01T10:00:00Z" },
    { userId: 2, action: "view", timestamp: "2024-01-01T10:05:00Z" },
    { userId: 1, action: "logout", timestamp: "2024-01-01T10:10:00Z" }
];
function analyzeUserActivity(logs) {
    const actionCount = {};
    const userActivity = {};
    const hourActivity = {};
    const uniqueUsers = new Set();
    for (const log of logs) {
        if (!actionCount[log.userId]) {
            actionCount[log.userId] = 0;
        }
        actionCount[log.userId]++;
        uniqueUsers.add(log.userId);
        const hour = new Date(log.timestamp).getHours();
        if (!hourActivity[hour]) {
            hourActivity[hour] = 0;
        }
        hourActivity[hour]++;
    }
    let mostActiveUser = null;
    let maxActions = -1;
    for (const userId in actionCount) {
        if (actionCount[userId] > maxActions) {
            maxActions = actionCount[userId];
            mostActiveUser = userId;
        }
    }
    let peakHour = null;
    let maxHourActivity = -1;
    for (const hour in hourActivity) {
        if (hourActivity[hour] > maxHourActivity) {
            maxHourActivity = hourActivity[hour];
            peakHour = hour;
        }
    }
    return {
        actionCount,
        mostActiveUser,
        peakHour,
        uniqueUserCount: uniqueUsers.size
    };
}
console.log(analyzeUserActivity(logs));