import { ApiModelProperty } from '@nestjs/swagger';

export class CreateDogDto {
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly age: number;

  @ApiModelProperty()
  readonly breed: string;
}
