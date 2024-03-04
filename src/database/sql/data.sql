
USE nails_studio;

-- new roles created

insert into roles (id, name) values (1, 'super_admin');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name) values (3, 'user');


-- create random users 

insert into roles (id, name, surname, password, email, role_id) values (1, 'super_admin', 'super_admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'super_admin@super_admin.com', 1);
insert into roles (id, name, surname, password, email, role_id) values (2, 'admin', 'admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'admin@admin.com', 2);
insert into roles (id, name, surname, password, email, role_id) values (3, 'user', 'user', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'user@user.com', 3);
insert into roles (id, name, surname, password, email, role_id) values (4, 'Bert', 'Otter', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'botter3@canalblog.com', 1);
insert into roles (id, name, surname, password, email, role_id) values (5, 'Annalee', 'Loftie', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'aloftie4@comsenz.com', 1);
insert into roles (id, name, surname, password, email, role_id) values (6, 'Leena', 'Stodd', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'lstodd5@apple.com', 3);
insert into roles (id, name, surname, password, email, role_id) values (7, 'Veronike', 'Quinn', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'vquinn6@adobe.com', 3);
insert into roles (id, name, surname, password, email, role_id) values (8, 'Yettie', 'Iacobo', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'yiacobo7@free.fr', 3);
insert into roles (id, name, surname, password, email, role_id) values (9, 'Taryn', 'Tregien', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'ttregien8@desdev.cn', 3);
insert into roles (id, name, surname, password, email, role_id) values (10, 'Manon', 'Cordaroy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'mcordaroy9@hao123.com', 2);
insert into roles (id, name, surname, password, email, role_id) values (11, 'Elysia', 'Kobel', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'ekobela@ted.com', 1);
insert into roles (id, name, surname, password, email, role_id) values (12, 'Dorri', 'Attock', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU3MDk3NSwiZXhwIjoxNzA5NjAzMzc1fQ.fUX9IvL0yVfv-vU6sX_R4Ophq0Rl0JzBp5FZWVPDsmc', 'dattockb@cbsnews.com', 2);

-- create random services


insert into services (id, name, description) values (1, 'semipermanente', 'Uñas semipermanentes sobre base natural de una duración aproximada 15 días. Decoraciones extra.');
insert into services (id, name, description) values (2, 'semigel', 'Uñas semigel con refuerzo sobre uña natural sin extensión. Decoraciones extra.');
insert into services (id, name, description) values (3, 'gel', 'Uñas de gel forma a escoger. Precio en función de su largo. Extras a parte.');
insert into services (id, name, description) values (4, 'retirada', 'Retirada de uñas con diferentes materiales (a consultar)');

