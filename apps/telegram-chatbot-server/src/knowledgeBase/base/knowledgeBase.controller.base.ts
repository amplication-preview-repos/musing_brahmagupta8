/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { KnowledgeBaseService } from "../knowledgeBase.service";
import { KnowledgeBaseCreateInput } from "./KnowledgeBaseCreateInput";
import { KnowledgeBase } from "./KnowledgeBase";
import { KnowledgeBaseFindManyArgs } from "./KnowledgeBaseFindManyArgs";
import { KnowledgeBaseWhereUniqueInput } from "./KnowledgeBaseWhereUniqueInput";
import { KnowledgeBaseUpdateInput } from "./KnowledgeBaseUpdateInput";

export class KnowledgeBaseControllerBase {
  constructor(protected readonly service: KnowledgeBaseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: KnowledgeBase })
  async createKnowledgeBase(
    @common.Body() data: KnowledgeBaseCreateInput
  ): Promise<KnowledgeBase> {
    return await this.service.createKnowledgeBase({
      data: data,
      select: {
        createdAt: true,
        description: true,
        file: true,
        fileName: true,
        id: true,
        updatedAt: true,
        uploadedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [KnowledgeBase] })
  @ApiNestedQuery(KnowledgeBaseFindManyArgs)
  async knowledgeBases(
    @common.Req() request: Request
  ): Promise<KnowledgeBase[]> {
    const args = plainToClass(KnowledgeBaseFindManyArgs, request.query);
    return this.service.knowledgeBases({
      ...args,
      select: {
        createdAt: true,
        description: true,
        file: true,
        fileName: true,
        id: true,
        updatedAt: true,
        uploadedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: KnowledgeBase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async knowledgeBase(
    @common.Param() params: KnowledgeBaseWhereUniqueInput
  ): Promise<KnowledgeBase | null> {
    const result = await this.service.knowledgeBase({
      where: params,
      select: {
        createdAt: true,
        description: true,
        file: true,
        fileName: true,
        id: true,
        updatedAt: true,
        uploadedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: KnowledgeBase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateKnowledgeBase(
    @common.Param() params: KnowledgeBaseWhereUniqueInput,
    @common.Body() data: KnowledgeBaseUpdateInput
  ): Promise<KnowledgeBase | null> {
    try {
      return await this.service.updateKnowledgeBase({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          file: true,
          fileName: true,
          id: true,
          updatedAt: true,
          uploadedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: KnowledgeBase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteKnowledgeBase(
    @common.Param() params: KnowledgeBaseWhereUniqueInput
  ): Promise<KnowledgeBase | null> {
    try {
      return await this.service.deleteKnowledgeBase({
        where: params,
        select: {
          createdAt: true,
          description: true,
          file: true,
          fileName: true,
          id: true,
          updatedAt: true,
          uploadedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
