CREATE DATABASE ecommerce_db;
USE ecommerce_db;
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100)
);
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);
create table review(
review_id int primary key auto_increment,
name varchar(100) ,
rating int check (rating>0),
product_id int ,
user_id int ,
foreign key (user_id) references users(user_id),
foreign key (product_id) references products(product_id)
);
alter  table products modify product_name varchar(100) not null;
alter  table products modify price decimal(10,2) check (price>0);
alter  table products add stock int check (stock>=0);
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    order_date DATE
);
CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    amount DECIMAL(10,2)
);
ALTER TABLE payments
ADD CONSTRAINT fk_payment_order
FOREIGN KEY (order_id)
REFERENCES orders(order_id)
ON DELETE CASCADE;

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT NOT NULL CHECK (quantity > 0),
    PRIMARY KEY (order_id, product_id)
);
ALTER TABLE order_items
ADD CONSTRAINT fk_order
FOREIGN KEY (order_id)
REFERENCES orders(order_id)
ON DELETE CASCADE;

ALTER TABLE order_items
ADD CONSTRAINT fk_product
FOREIGN KEY (product_id)
REFERENCES products(product_id)
ON DELETE CASCADE;

ALTER TABLE orders DROP COLUMN quantity;
ALTER TABLE users
MODIFY name VARCHAR(100) NOT NULL;
ALTER TABLE users
MODIFY email VARCHAR(100) unique;
ALTER TABLE users
ADD phone VARCHAR(15) unique;
alter table orders modify order_date date default (current_date());
alter table orders add status varchar(20) default "pending";
INSERT INTO users (name, email) VALUES
('Amit', 'amit@gmail.com'),
('Riya', 'riya@gmail.com'),
('Sonal', 'sonal@gmail.com'),
('Raj', 'raj@gmail.com'),
('Meera', 'meera@gmail.com');
ALTER TABLE orders
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES users(user_id)
ON DELETE CASCADE;

INSERT INTO products (product_name, price, stock)VALUES
('Socks', 20, 15),
('Shirt', 400, 33);
INSERT INTO users (name, email, phone) VALUES
('Arjun', 'arjun@gmail.com', '9241257834'),
('Neha', 'neha@gmail.com', '6745893443'),
('Rohit', 'rohit@gmail.com', '5548298724'),
('Simran', 'simran@gmail.com', '5567351344'),
('Kabir', 'kabir@gmail.com', '3749989499');
INSERT INTO orders (user_id, order_date, status) VALUES
(1, '2025-07-01', 'completed'),
(2, '2025-07-02', 'completed'),
(3, '2025-07-03', 'pending'),
(1, '2025-07-05', 'completed'),
(4, '2025-07-06', 'pending');
SELECT * FROM orders;
INSERT INTO order_items (order_id, product_id, quantity) VALUES
(3, 1, 2),
(3, 2, 1),
(4, 2, 3),
(5, 1, 1),
(6, 2, 2);
select * from products;
select * from users;
DELETE FROM users
WHERE user_id >= 6;
UPDATE users
SET phone = '9241257834'
WHERE user_id = 1;

UPDATE users
SET phone = '6745893443'
WHERE user_id = 2;

UPDATE users
SET phone = '5548298724'
WHERE user_id = 3;

UPDATE users
SET phone = '5567351344'
WHERE user_id = 4;

UPDATE users
SET phone = '3749989499'
WHERE user_id = 5;
-- Q1. Show user name and their order_id.
select u.name,o.order_id from users u inner join orders o on u.user_id=o.user_id;
-- Q2. Show product name and quantity ordered.
SELECT p.product_name, oi.quantity
FROM products p
JOIN order_items oi
ON p.product_id = oi.product_id;
-- Q3. Show user name and payment amount.
SELECT u.name, p.amount
FROM users u
JOIN orders o ON u.user_id = o.user_id
JOIN payments p ON o.order_id = p.order_id;
-- Q4. Show all users and their orders (even if none).
SELECT u.name, o.order_id
FROM users u
LEFT JOIN orders o
ON u.user_id = o.user_id;
-- Q5. Show all products and order_items.
SELECT p.product_name, oi.quantity
FROM products p
LEFT JOIN order_items oi
ON p.product_id = oi.product_id;
-- Q6. Show all orders and payments (even unpaid).
SELECT o.order_id, p.amount
FROM orders o
LEFT JOIN payments p
ON o.order_id = p.order_id;
-- Q7. Show all orders even if user record missing.
SELECT u.name, o.order_id
FROM users u
RIGHT JOIN orders o
ON u.user_id = o.user_id;
-- Q8. Show all products even if no review exists.
SELECT p.product_name, r.rating
FROM review r
RIGHT JOIN products p
ON r.product_id = p.product_id;
