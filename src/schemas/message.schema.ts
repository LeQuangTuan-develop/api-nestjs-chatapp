import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type MessageDocument = Message & Document

@Schema()
export class Message {
    @Prop({ nullable: true })
    conversation_id: string

    @Prop({ default: true})
    status: boolean

    @Prop({ required: true, length: 255 })
    message: string
}

export const MessageSchema = SchemaFactory.createForClass(Message)