document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillChart').getContext('2d');
    const skillChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Frontend', 'Backend', 'Database', 'DevOps'],
            datasets: [{
                data: [25, 25, 25, 25],
                backgroundColor: [
                    '#87CEEB', // Sky blue for Frontend
                    '#1E90FF', // Dodger blue for Backend
                    '#00BFFF', // Deep sky blue for Database
                    '#4682B4'  // Steel blue for DevOps
                ],
                borderColor: '#000', // Black border color
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        }
    });

    const skillsInfo = document.getElementById('skillsInfo');
    const skillDetails = {
        'Frontend': `
            <h3>Frontend Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        `,
        'Backend': `
            <h3>Backend Skills</h3>
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Java</li>
                <li>Spring Boot</li>
            </ul>
        `,
        'Database': `
            <h3>Database Skills</h3>
            <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>SQLite</li>
            </ul>
        `,
        'DevOps': `
            <h3>DevOps Skills</h3>
            <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>CI/CD</li>
                <li>AWS</li>
            </ul>
        `
    };

    document.getElementById('skillChart').addEventListener('mousemove', function(evt) {
        const activePoints = skillChart.getElementsAtEvent(evt);
        if (activePoints.length > 0) {
            const chartData = activePoints[0]['_chart'].config.data;
            const idx = activePoints[0]['_index'];
            const label = chartData.labels[idx];
            skillsInfo.innerHTML = skillDetails[label];
            skillsInfo.style.display = 'block';
        } else {
            skillsInfo.style.display = 'none';
        }
    });
});
