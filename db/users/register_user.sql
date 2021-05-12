insert into carna_user(
    is_admin, username, email, password, profile_picture)
    values(
        ${is_admin},
        ${username},
        ${email},
        ${hash},
        ${profile_picture}
    )
returning *;