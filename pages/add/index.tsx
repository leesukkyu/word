import React, {useState, useRef} from 'react'
import styles from './add.module.scss'
import Layout from '@components/layout/Layout'
import Image from 'next/image'
import {Form, Input, Button, Slider, Switch, Upload} from 'antd'
import {InfoCircleOutlined, PlusOutlined, MinusCircleOutlined, InboxOutlined} from '@ant-design/icons'
import {applySession} from 'next-session'
import {sessionConfig} from '@config/index'

const Add = ({session}) => {
    const [form] = Form.useForm()

    return (
        <Layout session={session}>
            <Form form={form} layout="vertical" requiredMark={true}>
                <Form.Item
                    label="선택 A 타이틀"
                    required
                    tooltip={{title: '선택 타이틀을 입력해 주세요.', icon: <InfoCircleOutlined />}}>
                    <Input placeholder="예) 짜장면" />
                </Form.Item>
                <Form.Item
                    label="선택 A 설명"
                    tooltip={{title: '선택 설명을 입력해 주세요.', icon: <InfoCircleOutlined />}}>
                    <Input.TextArea placeholder="예) 후루룩 짜짱면" />
                </Form.Item>
                <Form.Item label="선택 A 이미지">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={() => {}} noStyle>
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">선택 A 이미지</p>
                            <p className="ant-upload-hint"></p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="선택 A 장점">
                    <Input placeholder="예) 살이 안찐다" style={{width: '60%'}} />
                    <MinusCircleOutlined className="dynamic-delete-button" onClick={() => {}} />
                    <Button type="dashed" onClick={() => {}} block icon={<PlusOutlined />}>
                        장점 추가
                    </Button>
                </Form.Item>
                <Form.Item label="선택 A 단점">
                    <Input placeholder="예) 많이 먹으면 물린다" style={{width: '60%'}} />
                    <MinusCircleOutlined className="dynamic-delete-button" onClick={() => {}} />
                    <Button type="dashed" onClick={() => {}} block icon={<PlusOutlined />}>
                        단점 추가
                    </Button>
                </Form.Item>
                <Form.Item label="선택 B 타이틀" required>
                    <Input placeholder="예) 짬뽕" />
                </Form.Item>
                <Form.Item label="선택 B 설명">
                    <Input.TextArea placeholder="예) 매콤 뜨끈한 짬뽕" />
                </Form.Item>
                <Form.Item label="선택 B 이미지">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={() => {}} noStyle>
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">선택 B 이미지</p>
                            <p className="ant-upload-hint"></p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="선택 B 장점">
                    <Input placeholder="예) 살이 안찐다" style={{width: '60%'}} />
                    <MinusCircleOutlined className="dynamic-delete-button" onClick={() => {}} />
                    <Button type="dashed" onClick={() => {}} block icon={<PlusOutlined />}>
                        장점 추가
                    </Button>
                </Form.Item>
                <Form.Item label="선택 B 단점">
                    <Input placeholder="예) 많이 먹으면 물린다" style={{width: '60%'}} />
                    <MinusCircleOutlined className="dynamic-delete-button" onClick={() => {}} />
                    <Button type="dashed" onClick={() => {}} block icon={<PlusOutlined />}>
                        단점 추가
                    </Button>
                </Form.Item>

                <Form.Item name="switch" label="만든이 감추기">
                    <Switch />
                </Form.Item>
                <Form.Item name="switch" label="연령 제한하기">
                    <Switch />
                    <Slider range defaultValue={[0, 100]} dots step={10} disabled={false} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary">생성하기</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export async function getServerSideProps({req, res}) {
    await applySession(req, res, sessionConfig)
    return {
        props: {
            session: {
                user: req.session?.user ? req.session.user : {},
            },
        },
    }
}

export default Add
