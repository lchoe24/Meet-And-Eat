import { dataSource } from './dataSource.js';

const checkExistingRoom = async (restaurantId, hostId, date, timeId) => {
  return await dataSource.query(
    `SELECT 
      restaurant_id,
      host_id, 
      date, 
      time_id 
      FROM rooms 
      WHERE 
      restaurant_id = ? AND host_id = ? AND date = ? AND time_id = ?`,
    [restaurantId, hostId, date, timeId]
  );
};

const createRoom = async (roomposts) => {
  const {
    restaurantId,
    hostId,
    title,
    date,
    timeId,
    maxNum,
    image,
    content,
    ageId,
    genderId,
    tag,
    roomStatusId,
  } = roomposts;

  try {
    const result = await dataSource.query(
      `
        INSERT INTO rooms (
            restaurant_id,
            host_id,
            title,
            date,
            time_id,
            max_num,
            image,
            content,
            age_id,
            gender_id,
            tag,
            room_status_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        restaurantId,
        hostId,
        title,
        date,
        timeId,
        maxNum,
        image,
        content,
        ageId,
        genderId,
        tag,
        roomStatusId,
      ]
    );
    return result;
  } catch (err) {
    const error = new Error();
    error.message = 'INVALID_DATA_INPUT';
    error.statusCode = 400;
    throw error;
  }
};

const roomsByHost = async (userId) => {
  try {
    const rooms = await dataSource.query(
      `
      SELECT 
        rooms.id AS roomId,
        restaurants.id AS restaurantId, 
        restaurants.name AS restaurantName,
        host_id AS hostId, 
        rooms.image, 
        date, 
        times.id AS timeId,
        times.hour,
        max_num AS maxNum, 
        ages.id AS ageId, 
        ages.age_range AS ageRange,
        genders.id AS genderId,
        genders.gender
      FROM rooms
      JOIN ages ON ages.id = age_id
      JOIN genders ON genders.id = gender_id
      JOIN times ON times.id = time_id
      JOIN restaurants ON restaurants.id = restaurant_id
      WHERE host_id = ?;
    `,
      [userId]
    );
    return rooms;
  } catch {
    const error = new Error('DATASOURCE_ERROR');
    error.statusCode = 400;
    throw error;
  }
};

const roomsByGuest = async (userId) => {
  try {
    const rooms = await dataSource.query(
      `
      SELECT 
        rooms.id AS roomId,
        rooms.title AS roomTitle,
        restaurants.id AS restaurantId, 
        restaurants.name AS restaurantName,
        rooms.image, 
        date,
        times.hour
      FROM rooms
      JOIN restaurants ON restaurants.id = restaurant_id
      JOIN times ON times.id = time_id
      LEFT JOIN room_guests on room_guests.room_id = rooms.id
      WHERE room_guests.user_id = ?
    `,
      [userId]
    );
    return rooms;
  } catch {
    const error = new Error('DATASOURCE_ERROR');
    error.statusCode = 400;
    throw error;
  }
};

const roomsByMe = async (userId) => {
  try {
    const rooms = await dataSource.query(
      `
      SELECT 
        rooms.id AS roomId,
        rooms.title AS roomTitle,
        restaurants.id AS restaurantId, 
        restaurants.name AS restaurantName,
        rooms.image, 
        date, 
        times.hour,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', users.id, 
            'name', users.name
            )
          ) as guests
      FROM rooms
      JOIN times ON times.id = time_id
      JOIN restaurants ON restaurants.id = restaurant_id
      INNER JOIN room_guests on room_guests.room_id = rooms.id
      JOIN users on room_guests.user_id = users.id
      WHERE host_id = ?
      GROUP BY rooms.id;
    `,
      [userId]
    );
    return rooms;
  } catch {
    const error = new Error('DATASOURCE_ERROR');
    error.statusCode = 400;
    throw error;
  }
};

const ages = async () => {
  try {
    return await dataSource.query(
      `
      SELECT 
        id, 
        age_range
      FROM ages
      `
    );
  } catch {
    const error = new Error('DATASOURCE_ERROR');
    error.statusCode = 400;
    throw error;
  }
};

const genders = async () => {
  try {
    return await dataSource.query(
      `
      SELECT 
        id, 
        gender
      FROM genders
      `
    );
  } catch {
    const error = new Error('DATASOURCE_ERROR');
    error.statusCode = 400;
    throw error;
  }
};

const times = async () => {
  try {
    return await dataSource.query(
      `
      SELECT 
        id, 
        hour
      FROM times
      `
    );
  } catch {
    const error = new Error('DATASOURCE_ERROR');
    error.statusCode = 400;
    throw error;
  }
};

export default {
  createRoom,
  roomsByHost,
  roomsByGuest,
  roomsByMe,
  ages,
  genders,
  times,
  checkExistingRoom,
};
