import { Button, Card, Form, Input, Typography } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ResetPassword = () => {
    const navigate = useNavigate();

    const onFinish = (values: { password: string, confirmPassword: string }) => {
        console.log(values);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-6">
            <Card className="w-full max-w-md rounded-3xl shadow-xl">
                <div className="text-center mb-8">
                    <Title level={2}>Reset Password</Title>

                    <Text type="secondary">Create a new password for your account.</Text>
                </div>

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="New Password" name="password" rules={[
                        {
                            required: true,
                            message: "Please enter new password",
                        },
                    ]}>
                        <Input.Password size="large" prefix={<LockOutlined />} placeholder="Enter new password" />
                    </Form.Item>

                    <Form.Item label="Confirm Password" name="confirmPassword" dependencies={["password"]} rules={[
                        {
                            required: true,
                            message: "Confirm your password",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(
                                    new Error(
                                        "Passwords do not match"
                                    )
                                );
                            },
                        }),
                    ]}>
                        <Input.Password size="large" prefix={<LockOutlined />} placeholder="Confirm password" />
                    </Form.Item>

                    <Button htmlType="submit" type="primary" block size="large" className="!rounded-xl" >
                        Update Password
                    </Button>

                    <div className="text-center mt-5">
                        <Button type="link" className="!p-0" onClick={() => navigate('/auth/login')}>
                            Back to Login
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default ResetPassword;