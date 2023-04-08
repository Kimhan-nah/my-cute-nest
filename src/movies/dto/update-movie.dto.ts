import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

// readonly '?' 의미?? -> 필수 사항 아님을 의미
export class updateMovieDto extends PartialType(CreateMovieDto) {

}