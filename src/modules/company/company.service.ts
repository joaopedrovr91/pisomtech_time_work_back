import { PrismaService } from '@modules/shared/services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCompanyDTO } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
	constructor(private prisma: PrismaService) {}
	async create(data: CreateCompanyDTO) {
		const company = await this.prisma.company.create({
			data: {
				name: data.name,
				imgPath: data.imgPath,
			},
		});
		return company;
	}

	async findAll() {
		return await this.prisma.company.findMany();
	}

	async update(id: number, data: CreateCompanyDTO) {
		const companyExists = await this.prisma.company.findUnique({
			where: {
				id,
			},
		});

		if (!companyExists) {
			throw new Error('empresa não existe');
		}

		return await this.prisma.company.update({
			data: {
				imgPath: data.imgPath,
				name: data.name,
			},
			where: {
				id,
			},
		});
	}

	async remove(id: number) {
		const companyExists = await this.prisma.company.findUnique({
			where: {
				id,
			},
		});

		if (!companyExists) {
			throw new Error('empresa não existe');
		}

		return await this.prisma.company.delete({
			where: {
				id,
			},
		});
	}
}
