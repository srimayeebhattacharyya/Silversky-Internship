use ecommerce_db;
SELECT * FROM users;
SELECT name, email FROM users;
SELECT * FROM products;
/*filtering with where*/
SELECT * FROM users WHERE user_id = 1;
SELECT * FROM products WHERE price > 100;
SELECT * FROM orders WHERE user_id = 2;
SELECT * FROM products 
WHERE price > 200 AND price < 2000;

SELECT * FROM users 
WHERE name = 'Amit Sharma' OR name = 'Riya';
SELECT * FROM products ORDER BY price ASC;
SELECT * FROM products ORDER BY price DESC;

SELECT * FROM products 
ORDER BY price DESC 
LIMIT 3;
SELECT * FROM users WHERE name LIKE 'A%';   -- starts with A
SELECT * FROM users WHERE name LIKE '%a';   -- ends with a
SELECT * FROM users WHERE name LIKE '%ri%'; -- contains 'ri'
SELECT * FROM users WHERE email LIKE '%gmail.com';

UPDATE users
SET name = 'Amit Sharma'
WHERE user_id = 1;
select name from users where user_id=1;
UPDATE products
SET price = price + 100
WHERE price < 200 and
product_id>0;
select * from products ;
INSERT INTO orders (user_id, order_date)
VALUES (999, CURDATE());
SELECT * FROM users
WHERE user_id = (
    SELECT user_id FROM users WHERE name = 'Amit Sharma'
);
SHOW CREATE TABLE products;



