-- 2
SELECT COUNT(S.id) AS cancoes, COUNT(DISTINCT A.artist_id) AS artistas, COUNT(DISTINCT A.id) AS albuns
FROM SpotifyClone.songs AS S
INNER JOIN SpotifyClone.albums AS A
ON A.id = S.album_id;

-- 3
SELECT * FROM SpotifyClone.history;
SELECT * FROM SpotifyClone.songs;
SELECT u.name AS usuario, COUNT(h.user_id) AS qtde_musicas_ouvidas, ROUND(SUM(s.song_length / 60),2) AS total_minutos
FROM SpotifyClone.users AS u
INNER JOIN SpotifyClone.history AS h
ON h.user_id = u.id
INNER JOIN SpotifyClone.songs as s
ON h.song_id = s.id
GROUP BY h.user_id
ORDER BY u.name;

-- 4 
SELECT * FROM SpotifyClone.users;
SELECT u.name as usuario, IF(MAX(YEAR(h.playback_date)) = 2021, 'Usuário ativo', 'Usuário inativo') AS condicao_usuario
FROM SpotifyClone.users AS u
INNER JOIN SpotifyClone.history as h
ON u.id = h.user_id
GROUP BY usuario
ORDER BY u.name;

-- 5
SELECT s.name AS cancao, COUNT(h.song_id) AS reproducoes
FROM SpotifyClone.songs AS s
INNER JOIN SpotifyClone.history AS h
ON s.id = h.song_id
GROUP BY h.song_id
ORDER BY reproducoes DESC, cancao
LIMIT 2;

-- 6
SELECT * FROM SpotifyClone.plans;

SELECT MIN(p.price) AS faturamento_minimo, MAX(p.price) AS faturamento_maximo, ROUND(AVG(p.price),2) AS faturamento_medio, SUM(p.price) AS faturamento_total
FROM SpotifyClone.users AS u
INNER JOIN SpotifyClone.plans AS p
ON u.plan_id = p.id;

-- 7
SELECT * FROM SpotifyClone.followers;

SELECT
	a.name AS artista,
    alb.name AS album,
    COUNT(f.user_id) AS seguidores
FROM SpotifyClone.artists AS a
INNER JOIN SpotifyClone.followers as f
ON a.id = f.artist_id
INNER JOIN SpotifyClone.albums as alb
ON alb.artist_id = a.id
GROUP BY artista, album
ORDER BY seguidores DESC, artista, album;

-- 8
SELECT * FROM SpotifyClone.songs;
SELECT * FROM SpotifyClone.artists;
SELECT * FROM SpotifyClone.albums;

SELECT a.name AS artista, alb.name AS album
FROM SpotifyClone.artists AS a
INNER JOIN SpotifyClone.albums AS alb
ON alb.artist_id = a.id
WHERE a.name = 'Walter Phoenix'
ORDER BY artista;

-- 9
SELECT COUNT(h.user_id) AS quantidade_musicas_no_historico
FROM SpotifyClone.history AS h
INNER JOIN SpotifyClone.users AS u
ON h.user_id = u.id
WHERE u.name = 'Bill';

-- 10
SELECT s.name AS nome, COUNT(h.song_id) AS reproducoes
FROM SpotifyClone.songs AS s
INNER JOIN SpotifyClone.history AS h
ON s.id = h.song_id
INNER JOIN SpotifyClone.users AS u
ON u.id = h.user_id
INNER JOIN SpotifyClone.plans AS p
ON u.plan_id = p.id
WHERE p.type IN ('gratuito', 'pessoal')
GROUP BY nome
ORDER BY nome;

-- 11

SELECT name AS nome_musica,
	CASE
		WHEN name LIKE '%Streets%' THEN REPLACE(name, 'Streets', 'Code Review')
        WHEN name LIKE '%Her Own%' THEN REPLACE(name,'Her Own', 'Trybe')
        WHEN name LIKE '%Inner Fire%' THEN REPLACE(name, 'Inner Fire', 'Project')
        WHEN name LIKE '%Silly%' THEN REPLACE(name, 'Silly', 'Nice')
        WHEN name LIKE '%Circus%' THEN REPLACE(name, 'Circus', 'Pull Request')
	END AS novo_nome
FROM SpotifyClone.songs
HAVING novo_nome IS NOT NULL
ORDER BY nome_musica;