async function createUserTable() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
        ]);

        const table = document.createElement('table');

        const headerTitles = ['Username', 'Email', 'Company Name', 'Address Geo', 'Posts'];
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        headerTitles.forEach(title => {
            const th = document.createElement('th');
            th.textContent = title;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        users.forEach(user => {
            const row = document.createElement('tr');

            const username = user.username;
            const email = user.email;
            const company = user.company.name;
            const geo = `Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`;

            [username, email, company, geo].forEach(text => {
                const td = document.createElement('td');
                td.textContent = text;
                row.appendChild(td);
            });

            const postsTd = document.createElement('td');
            const userPosts = posts.filter(p => p.userId === user.id);
            if (userPosts.length) {
                const ul = document.createElement('ul');
                userPosts.forEach(post => {
                    const li = document.createElement('li');
                    const commentCount = comments.filter(c => c.postId === post.id).length;
                    li.textContent = `${post.title} (${commentCount} comments)`;
                    ul.appendChild(li);
                });
                postsTd.appendChild(ul);
            } else {
                postsTd.textContent = 'No posts';
            }

            row.appendChild(postsTd);
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        document.getElementById('userTable').appendChild(table);

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('userTable').innerHTML = '<p>Failed to load data.</p>';
    }
}

createUserTable();