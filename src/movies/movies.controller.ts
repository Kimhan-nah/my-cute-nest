import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
	@Get()
	getAll() {
		return 'This will return all movies';
	}

	// movies/search?year=2000
	// search가 get("/:id")보다 밑에 있으면 NestJS는 search를 id로 판단 -> 위에 위치해야 함
	@Get("search")
	search(@Query("year") searchingYear: string) {	// 가져오는 변수와 return 값을 확인할 수 있음
		return `We are searching for a movie with a title: ${searchingYear}`;
	}

	@Get("/:id")
	getOne(@Param("id") movieId: string) {
		return `This will return one movie with the id ${movieId}`;
	}

	@Post()
	create(@Body() movieData) {
		return movieData;
	}

	@Delete("/:id")
	remove(@Param('id') movieId: string) {
		return `This will delete a movie with the id ${movieId}`;
	}

	@Patch('/:id')
	patch(@Param('id') movieId: string, @Body() updateData) {
		return {
			updatedMovie: movieId,
			...updateData,
		};
	}

}
