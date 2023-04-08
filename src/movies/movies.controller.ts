import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
	constructor(private readonly moviesService: MoviesService) { }

	@Get()
	getAll(): Movie[] {
		return this.moviesService.getAll();
	}

	// movies/search?year=2000
	// search가 get("/:id")보다 밑에 있으면 NestJS는 search를 id로 판단 -> 위에 위치해야 함
	// @Get("search")
	// search(@Query("year") searchingYear: string) {	// 가져오는 변수와 return 값을 확인할 수 있음
	// 	return `We are searching for a movie with a title: ${searchingYear}`;
	// }

	@Get("/:id")
	getOne(@Param("id") movieId: number): Movie {
		return this.moviesService.getOne(movieId);
		// return `This will return one movie with the id ${movieId}`;
	}

	@Post()
	create(@Body() movieData: CreateMovieDto) {
		return this.moviesService.create(movieData);
	}

	@Delete("/:id")
	remove(@Param('id') movieId: number) {
		// return `This will delete a movie with the id ${movieId}`;
		return this.moviesService.deleteOne(movieId);
	}

	@Patch('/:id')
	patch(@Param('id') movieId: number, @Body() updateData: updateMovieDto) {
		return this.moviesService.update(movieId, updateData);
	}

}
