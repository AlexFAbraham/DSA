CREATE VIEW Admin_view
AS
SELECT  username, f_name, m_initial, l_name, email,
        phone_number, major, scholastic_year,roleID
FROM users;