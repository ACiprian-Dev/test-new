import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  season: string;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;

  @IsNumber()
  diameter: number;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;

  @IsString()
  @IsNotEmpty()
  slug: string;
}
