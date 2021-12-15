import {
	Controller,
	Get,
	HttpCode,
	Post,
	Req,
	Res,
	Request,
	Response,
} from "@nestjs/common";

@Controller("auth")
export class AuthController {
	@Get("login")
	@HttpCode(200)
	loginView(@Req() req: Request, @Res() res: Response): string {
		return "Login controller is works";
	}

	@Post("login")
	@HttpCode(201)
	async login(@Req() req: Request): Promise<string> {
		return "Login post controller is works";
	}
}
