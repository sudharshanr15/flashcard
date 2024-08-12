create table admin(
    id int primary key not null auto_increment,
    username varchar(255) not null unique,
    password varchar(255) not null
);

create table topics(
    id int primary key not null auto_increment,
    name varchar(25) not null unique
);

create table topic_cards(
    id int primary key not null auto_increment,
    topic_id int not null,
    question varchar(255) not null,
    answer varchar(400) not null,
    foreign key (topic_id) references topics(id)
);

create table access_tokens(
    id int primary key not null auto_increment,
    admin_id int not null,
    token varchar(255) not null,
    expiry_at datetime not null,

    foreign key (admin_id) references admin(id)
);