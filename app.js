document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Performance',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const notifications = [
        'Metric A exceeded threshold!',
        'Metric B is within normal range.',
        'Metric C requires attention!'
    ];

    const notificationsList = document.getElementById('notifications');
    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = notification;
        notificationsList.appendChild(li);
    });

    const activityFeed = [
        { date: '2023-10-01', type: 'Login', description: 'User logged in.' },
        { date: '2023-10-02', type: 'Error', description: 'Error occurred.' },
        { date: '2023-10-03', type: 'Update', description: 'System updated.' }
    ];

    const activityFeedList = document.getElementById('activityFeed');
    const sortOptions = document.getElementById('sortOptions');

    function renderActivityFeed() {
        activityFeedList.innerHTML = '';
        const sortedFeed = [...activityFeed].sort((a, b) => {
            if (sortOptions.value === 'date') {
                return new Date(a.date) - new Date(b.date);
            } else {
                return a.type.localeCompare(b.type);
            }
        });
        sortedFeed.forEach(activity => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${activity.date} - ${activity.type}: ${activity.description}`;
            activityFeedList.appendChild(li);
        });
    }

    sortOptions.addEventListener('change', renderActivityFeed);
    renderActivityFeed();

    setInterval(() => {
        const randomValue = Math.floor(Math.random() * 100);
        performanceChart.data.datasets[0].data.push(randomValue);
        performanceChart.data.labels.push(`New ${performanceChart.data.labels.length + 1}`);
        performanceChart.update();
    }, 5000);
});