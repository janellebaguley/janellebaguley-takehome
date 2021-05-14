insert into employees (
    username,
    email,
    password,
    admin
) values (
    ${username},
    ${email},
    ${password},
    ${isAdmin}
);