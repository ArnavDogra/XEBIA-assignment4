--Using the Orders table, write a query to find the total revenue and number of orders placed each month in the year 2024, ordered from highest revenue to lowest.
--Orders(order_id, customer_id, order_date, amount)

--Expected output columns:
--  month, total_revenue, total_orders
--Use DATE functions to extract the month. Format the month as a readable name (Jan, Feb…) if your SQL dialect supports it.
SELECT 
    TO_CHAR(order_date, 'Mon') AS month,
    SUM(amount) AS total_revenue,
    COUNT(order_id) AS total_orders 
FROM Orders
WHERE EXTRACT(YEAR FROM order_date) = 2024
GROUP BY TO_CHAR(order_date, 'Mon')
ORDER BY total_revenue DESC;        