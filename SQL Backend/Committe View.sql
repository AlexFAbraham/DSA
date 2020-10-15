CREATE VIEW Committee_view
AS
SELECT  username, f_name, m_initial, l_name, email,
        major, scholastic_year
FROM users
WHERE roleid = 2 or roleid = 3;