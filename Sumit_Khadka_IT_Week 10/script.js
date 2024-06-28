document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#dataTable tbody');
    
    const data = [
        { sn: 1, name: 'Name 1', image: '1.jpg' },
        { sn: 2, name: 'Name 2', image: '2.jpg' },
        { sn: 3, name: 'Name 3', image: '3.jpg' },
        { sn: 4, name: 'Name 4', image: '4.jpg' },
    ];
    
    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.sn}</td>
            <td>${row.name}</td>
            <td>${row.image}</td>
        `;
        tableBody.appendChild(tr);
    });
});