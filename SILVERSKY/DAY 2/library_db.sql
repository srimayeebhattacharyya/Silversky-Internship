CREATE DATABASE library_db;
USE library_db;
CREATE TABLE members (
    member_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15) UNIQUE,
    membership_date DATE DEFAULT (CURRENT_DATE)
);
select name from members where name like 's%' and name=lower(name);
CREATE TABLE authors (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    author_name VARCHAR(100) NOT NULL
);
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(100) NOT NULL UNIQUE
);
CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    author_id INT,
    category_id INT,
    published_year INT CHECK (published_year BETWEEN 1900 AND 2025),
    total_copies INT CHECK (total_copies >= 0),
    available_copies INT CHECK (available_copies >= 0),
    FOREIGN KEY (author_id)
        REFERENCES authors(author_id)
        ON DELETE SET NULL,
    FOREIGN KEY (category_id)
        REFERENCES categories(category_id)
        ON DELETE SET NULL
);
update books 
set available_copies=available_copies+2
where total_copies>5 and book_id>0;
select * from books;
CREATE TABLE rentals (
    member_id INT,
    book_id INT,
    rental_date DATE DEFAULT (CURRENT_DATE),
    return_date DATE,
    status VARCHAR(20) DEFAULT 'Borrowed',
    PRIMARY KEY (member_id, book_id, rental_date),
    FOREIGN KEY (member_id)
        REFERENCES members(member_id)
        ON DELETE CASCADE,
    FOREIGN KEY (book_id)
        REFERENCES books(book_id)
        ON DELETE CASCADE
);
select * from rentals where return_date> '2025-07-23' ; 
INSERT INTO members (name, email, phone) VALUES
('Amit', 'amit@gmail.com', '9876543210'),
('Riya', 'riya@gmail.com', '8765432109'),
('Sonal', 'sonal@gmail.com', '7654321098'),
('Raj', 'raj@gmail.com', '6543210987'),
('Meera', 'meera@gmail.com', '5432109876');
INSERT INTO authors (author_name) VALUES
('J.K. Rowling'),
('George Orwell'),
('Chetan Bhagat'),
('R.K. Narayan'),
('Agatha Christie');
INSERT INTO categories (category_name) VALUES
('Fiction'),
('Science'),
('History'),
('Technology'),
('Mystery');
INSERT INTO books (title, author_id, category_id, published_year, total_copies, available_copies) VALUES
('Harry Potter', 1, 1, 2000, 10, 7),
('1984', 2, 1, 1949, 5, 3),
('Half Girlfriend', 3, 1, 2014, 6, 6),
('Malgudi Days', 4, 1, 1943, 4, 2),
('Murder on the Orient Express', 5, 5, 1934, 3, 1);
INSERT INTO rentals (member_id, book_id, return_date) VALUES
(1, 1, '2025-07-20'),
(2, 2, '2025-07-25'),
(3, 3, '2025-07-30'),
(4, 4, NULL),
(5, 5, NULL);
SELECT * FROM books
WHERE available_copies < 5;
SELECT DISTINCT category_id
FROM books;
SELECT * FROM books
WHERE category_id = 1 AND available_copies > 2;
SELECT * FROM members
WHERE name = 'Amit' OR name = 'Raj';
SELECT * FROM books
WHERE book_id IN (1,3,5);
SELECT * FROM books
WHERE category_id NOT IN (1,5);
SELECT * FROM books
WHERE published_year BETWEEN 1940 AND 2010;
SELECT * FROM books
WHERE title LIKE 'H%';
SELECT * FROM books
LIMIT 3;
SELECT * FROM rentals
WHERE return_date IS NULL;
